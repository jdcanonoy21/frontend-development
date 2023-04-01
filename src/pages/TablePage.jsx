// import Table from "./../components/Table";

import SortableTable from '../components/SortableTable';

const TablePage = () => {
  const data = [
    {
      name: 'Tiger Nixon',
      position: 'System Architect',
      age: 61,
      office: 'Edinburgh',
      salary: '$320,800',
    },
    {
      name: 'Garrett Winters',
      position: 'Accountant',
      age: 53,
      office: 'Tokyo',
      salary: '$120,000',
    },
    {
      name: 'Ashton Cox',
      position: 'Junior Technical Author',
      age: 35,
      office: 'San Francisco',
      salary: '$100,000',
    },
    {
      name: 'Cedric Kelly',
      position: 'Senior Javascript Developer',
      age: 22,
      office: 'Edinburgh',
      salary: '$210,000',
    },
    {
      name: 'Airi Satou',
      position: 'Accountant',
      age: 33,
      office: 'Tokyo',
      salary: '$210,000',
    },
    {
      name: 'Brielle Williamson',
      position: 'Integration Specialist',
      age: 59,
      office: 'New York',
      salary: '$410,000',
    },
  ];

  const config = [
    {
      label: 'Name',
      render: (usersList) => usersList.name,
      sortValue: (usersList) => usersList.name,
    },
    {
      label: 'Position',
      render: (usersList) => usersList.position,
    },
    {
      label: 'Age',
      render: (usersList) => usersList.age,
      header: () => <th className="bg-red-500">Age</th>,
      sortValue: (usersList) => usersList.age,
    },
    {
      label: 'Office',
      render: (usersList) => usersList.office,
      header: () => <th className="bg-red-500">office</th>,
      sortValue: (usersList) => usersList.office,
    },
    {
      label: 'Salary',
      render: (userList) => userList.salary,
      header: () => <th className="bg-red-500">salary</th>,
      sortValue: (userList) => userList.salary,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
};

export default TablePage;
