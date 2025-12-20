using System;

public delegate double BillingStrategy(double amount);

public class BillGeneratedEventArgs : EventArgs
{
    public string PatientName { get; set; }
    public double Amount { get; set; }
    public string PatientType { get; set; }
}

public abstract class Patient
{
    public string Name { get; set; }
    public int Age { get; set; }

    public abstract double GetBaseCost();
    public abstract string GetPatientType();
}

public class GeneralPatient : Patient
{
    public override double GetBaseCost() => 2000;
    public override string GetPatientType() => "General";
}

public class EmergencyPatient : Patient
{
    public override double GetBaseCost() => 5000;
    public override string GetPatientType() => "Emergency";
}

public class VIPPatient : Patient
{
    public override double GetBaseCost() => 8000;
    public override string GetPatientType() => "VIP";
}

public class BillingService
{
    public event EventHandler<BillGeneratedEventArgs> BillGenerated;

    public double GenerateBill(Patient patient, BillingStrategy strategy)
    {
        double finalAmount = strategy(patient.GetBaseCost());
        BillGenerated?.Invoke(this, new BillGeneratedEventArgs
        {
            PatientName = patient.Name,
            Amount = finalAmount,
            PatientType = patient.GetPatientType()
        });
        return finalAmount;
    }
}

public class NotificationService
{
    public void SendNotification(object sender, BillGeneratedEventArgs e)
    {
        Console.WriteLine("\nNotification Triggered");
        Console.WriteLine("Patient Name : " + e.PatientName);
        Console.WriteLine("Patient Type : " + e.PatientType);
        Console.WriteLine("Bill Amount  : ₹" + e.Amount);
    }
}

class Program
{
    static bool IsValidName(string name)
    {
        if (string.IsNullOrWhiteSpace(name))
            return false;

        foreach (char c in name)
        {
            if (!char.IsLetter(c) && c != ' ')
                return false;
        }
        return true;
    }

    static void Main()
    {
        Console.WriteLine("Hospital Patient Management System\n");

        string name;
        while (true)
        {
            Console.Write("Enter Patient Name: ");
            name = Console.ReadLine();

            if (IsValidName(name))
                break;

            Console.WriteLine("Enter a valid name\n");
        }

        Console.Write("Enter Age: ");
        int age = int.Parse(Console.ReadLine());

        Console.WriteLine("\nSelect Patient Type");
        Console.WriteLine("1. General");
        Console.WriteLine("2. Emergency");
        Console.WriteLine("3. VIP");
        Console.Write("Choice: ");
        int choice = int.Parse(Console.ReadLine());

        Patient patient = choice switch
        {
            1 => new GeneralPatient(),
            2 => new EmergencyPatient(),
            3 => new VIPPatient(),
            _ => new GeneralPatient()
        };

        patient.Name = name;
        patient.Age = age;

        BillingStrategy strategy = patient.GetPatientType() switch
        {
            "General" => amount => amount * 1.05,
            "Emergency" => amount => amount * 1.20,
            "VIP" => amount => amount * 1.50,
            _ => amount => amount
        };

        BillingService billingService = new BillingService();
        NotificationService notificationService = new NotificationService();

        billingService.BillGenerated += notificationService.SendNotification;

        double bill = billingService.GenerateBill(patient, strategy);

        Console.WriteLine("\nFinal Bill");
        Console.WriteLine("Name  : " + patient.Name);
        Console.WriteLine("Type  : " + patient.GetPatientType());
        Console.WriteLine("Total : ₹" + bill);

        Console.ReadKey();
    }
}