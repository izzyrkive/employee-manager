INSERT INTO department (id, name)
VALUES (01, "Sales"),
       (02, "Finance"),
       (03, "Engineering"),
       (04, "Legal");

INSERT INTO role (id, title, salary, department_id)
VALUES (01, "Sales Lead", 100000.00, 01),
       (02, "Salesperson", 80000.00, 01),
       (03, "Accountant", 150000.00, 02),
       (04, "Account Manager", 175000.00, 02),
       (05, "Lead Engineer", 150000.00, 03),
       (06, "Software Engineer", 125000.00, 03),
       (07, "Legal Team Lead", 250000.00, 04),
       (08, "Attorney", 190000.00, 04);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (01, "Lucas", "Figueroa", 01, null),
       (02, "Calum", "Ryan", 02, 01),
       (03, "Kelsey", "Medina", 03, null),
       (04, "Derek", "Bates", 04, null),
       (05, "Carl", "Booker", 05, null),
       (06, "Abel", "Long", 06, 05),
       (07, "Hugo", "Klein", 07, null),
       (08, "Carly", "Schroeder", 08, 07);

       
