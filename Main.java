package com.homerental;

import java.util.List;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        PropertyDao dao = new PropertyDAOImpl();

        int choice;

        do {

            System.out.println("\n========== HOME RENTAL MANAGEMENT SYSTEM ==========");
            System.out.println("1. Add Property");
            System.out.println("2. Update Property");
            System.out.println("3. Delete Property");
            System.out.println("4. Search Property");
            System.out.println("5. Display All Properties");
            System.out.println("6. Exit");

            System.out.print("Enter Choice : ");
            choice = sc.nextInt();

            switch (choice) {

            case 1:

                Property p1 = new Property();

                System.out.print("Enter Property ID : ");
                p1.setPropertyId(sc.nextInt());
                sc.nextLine();

                System.out.print("Enter Owner Name : ");
                p1.setOwnerName(sc.nextLine());

                System.out.print("Enter Location : ");
                p1.setLocation(sc.nextLine());

                System.out.print("Enter Property Type : ");
                p1.setPropertyType(sc.nextLine());

                System.out.print("Enter Rent : ");
                p1.setRent(sc.nextDouble());
                sc.nextLine();

                System.out.print("Enter Status (Available/Rented) : ");
                p1.setStatus(sc.nextLine());

                dao.addProperty(p1);
                break;

            case 2:

                Property p2 = new Property();

                System.out.print("Enter Property ID to Update : ");
                p2.setPropertyId(sc.nextInt());
                sc.nextLine();

                System.out.print("Enter Owner Name : ");
                p2.setOwnerName(sc.nextLine());

                System.out.print("Enter Location : ");
                p2.setLocation(sc.nextLine());

                System.out.print("Enter Property Type : ");
                p2.setPropertyType(sc.nextLine());

                System.out.print("Enter Rent : ");
                p2.setRent(sc.nextDouble());
                sc.nextLine();

                System.out.print("Enter Status : ");
                p2.setStatus(sc.nextLine());

                dao.updateProperty(p2);
                break;

            case 3:

                System.out.print("Enter Property ID to Delete : ");
                int deleteId = sc.nextInt();

                dao.deleteProperty(deleteId);
                break;

            case 4:

                System.out.print("Enter Property ID to Search : ");
                int searchId = sc.nextInt();

                Property property = dao.searchProperty(searchId);

                if (property != null) {

                    System.out.println("\n===== Property Found =====");
                    System.out.println("ID       : " + property.getPropertyId());
                    System.out.println("Owner    : " + property.getOwnerName());
                    System.out.println("Location : " + property.getLocation());
                    System.out.println("Type     : " + property.getPropertyType());
                    System.out.println("Rent     : " + property.getRent());
                    System.out.println("Status   : " + property.getStatus());

                } else {

                    System.out.println("Property Not Found!");

                }

                break;

            case 5:

                List<Property> list = dao.displayAllProperties();

                if (list != null && !list.isEmpty()) {

                    System.out.println("\n========== PROPERTY LIST ==========");

                    for (Property p : list) {

                        System.out.println(
                                p.getPropertyId() + " | " +
                                p.getOwnerName() + " | " +
                                p.getLocation() + " | " +
                                p.getPropertyType() + " | " +
                                p.getRent() + " | " +
                                p.getStatus());

                    }

                } else {

                    System.out.println("No Properties Found.");

                }

                break;

            case 6:

                System.out.println("Thank You!");
                break;

            default:

                System.out.println("Invalid Choice!");

            }

        } while (choice != 6);

        sc.close();

    }

}