interface SubDepartment {
  id: number;
  subdepartment: string;
  isChecked: boolean;
}

export interface Department {
  id: number;
  department: string;
  isChecked: boolean;
  sub_departments: SubDepartment[];
  sub_departments_count: number;
}

const mockData: Department[] = [
  {
    id: 1,
    department: "Customer Service",
    isChecked: false,
    sub_departments: [
      { id: 11, subdepartment: "Support", isChecked: false },
      { id: 12, subdepartment: "Customer Success", isChecked: false },
    ],
    sub_departments_count: 2,
  },
  {
    id: 2,
    department: "Design",
    isChecked: false,
    sub_departments: [
      { id: 21, subdepartment: "Graphic Design", isChecked: false },
      { id: 22, subdepartment: "Product Design", isChecked: false },
      { id: 23, subdepartment: "Web Design", isChecked: false },
    ],
    sub_departments_count: 3,
  },
  {
    id: 3,
    department: "Development",
    isChecked: false,
    sub_departments: [
      { id: 31, subdepartment: "Frontend", isChecked: false },
      { id: 32, subdepartment: "Backend", isChecked: false },
      { id: 33, subdepartment: "Fullstack", isChecked: false },
    ],
    sub_departments_count: 3,
  },
  {
    id: 4,
    department: "Marketing",
    isChecked: false,
    sub_departments: [
      { id: 41, subdepartment: "Social Media", isChecked: false },
      { id: 42, subdepartment: "Content Creation", isChecked: false },
    ],
    sub_departments_count: 2,
  },
  {
    id: 5,
    department: "Finance",
    isChecked: false,
    sub_departments: [
      { id: 51, subdepartment: "Accounting", isChecked: false },
      { id: 52, subdepartment: "Budgeting", isChecked: false },
    ],
    sub_departments_count: 2,
  },
  {
    id: 6,
    department: "HR",
    isChecked: false,
    sub_departments: [
      { id: 61, subdepartment: "Recruitment", isChecked: false },
      { id: 62, subdepartment: "Employee Relations", isChecked: false },
    ],
    sub_departments_count: 2,
  },
  {
    id: 7,
    department: "IT",
    isChecked: false,
    sub_departments: [
      { id: 71, subdepartment: "Networking", isChecked: false },
      { id: 72, subdepartment: "Systems Admin", isChecked: false },
    ],
    sub_departments_count: 2,
  },
  {
    id: 8,
    department: "Sales",
    isChecked: false,
    sub_departments: [
      { id: 81, subdepartment: "Product Sales", isChecked: false },
      { id: 82, subdepartment: "Client Relations", isChecked: false },
    ],
    sub_departments_count: 2,
  },
];

export default mockData;
