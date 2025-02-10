export function KeeValue() {
  let company = {
    name: "TechCorp",
    employees: [
      {
        id: 1,
        name: "Alice Johnson",
        role: "Developer",
        skills: ["JavaScript", "React", "Node.js"],
      },
      {
        id: 2,
        name: "Bob Smith",
        role: "Designer",
        skills: ["Photoshop", "Illustrator", "Figma"],
      },
    ],
    projects: [
      {
        projectId: 101,
        title: "Website Redesign",
        team: ["Alice Johnson", " Bob Smith"],
        milestones: [
          { phase: "Design", completed: true },
          { phase: "Development", completed: false },
          { phase: "Testing", completed: false },
        ],
      },
      {
        projectId: 102,
        title: "Mobile App",
        team: ["Alice Johnson"],
        milestones: [
          { phase: "Prototype", completed: true },
          { phase: "Development", completed: true },
          { phase: "Deployment", completed: false },
        ],
      },
    ],
  };

  return (
    <div className="Company-details">
      {company.name}

      {company.employees.map(function (employeesItem) {
        return (
          <div key={employeesItem} className="Employees- item">
            <div>Id:{employeesItem.id}</div>
            <div>Name:{employeesItem.name}</div>
            <div>Role:{employeesItem.role}</div>
            {employeesItem.skills.map(function (skillsItem) {
              return (
                <div className="employees" key={skillsItem}>
                  <div>Skills:{skillsItem}</div>
                </div>
              );
            })}
          </div>
        );
      })}

      <hr />

      {company.projects.map(function (projectsItem) {
        return (
          <div className="Company-projects" key={projectsItem}>
            <div>ProjectId:{projectsItem.projectId}</div>
            <div>Title:{projectsItem.title}</div>
            <div>Team:{projectsItem.team}</div>
            {projectsItem.milestones.map(function (milestonesItem) {
              return (
                <div className="Milestones" key={milestonesItem}>
                  <div>Phase:{milestonesItem.phase}</div>
                  <div>Completed:{String(milestonesItem.completed)}</div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
