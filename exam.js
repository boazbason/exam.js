let militaryUnit = {
    name: "1st Infantry Division",
    location: "Fort Bragg, North Carolina, USA",
    establishmentDate: "1941-06-01",
    unitType: "Infantry Division",
    commandStructure: {
      commandingOfficer: {
        rank: "Major General",
        name: "John Doe",
        contact: {
          email: "john.doe@example.com",
          phone: "+1-555-123-4567",
        },
      },
      executiveOfficer: {
        rank: "Colonel",
        name: "Jane Smith",
        contact: {
          email: "jane.smith@example.com",
          phone: "+1-555-987-6543",
        },
      },
      chiefOfStaff: {
        rank: "Brigadier General",
        name: "Robert Brown",
        contact: {
          email: "robert.brown@example.com",
          phone: "+1-555-555-1234",
        },
      },
    },
    personnel: [
      {
        id: 1,
        name: "Private First Class Alice Johnson",
        rank: "Private First Class",
        role: "Rifleman",
        contact: {
          email: "alice.johnson@example.com",
          phone: "+1-555-000-1111",
        },
      },
      {
        id: 2,
        name: "Sergeant Michael White",
        rank: "Sergeant",
        role: "Squad Leader",
        contact: {
          email: "michael.white@example.com",
          phone: "+1-555-000-2222",
        },
      },
    ],
    equipment: {
      vehicles: [
        {
          type: "M1 Abrams Tank",
          quantity: 20,
          status: "Operational",
        },
        {
          type: "Humvee",
          quantity: 50,
          status: "Operational",
        },
      ],
      firearms: [
        {
          type: "M16 Rifle",
          quantity: 500,
          status: "Operational",
        },
        {
          type: "M249 SAW",
          quantity: 100,
          status: "Operational",
        },
      ],
      otherEquipment: [
        {
          type: "Night Vision Goggles",
          quantity: 150,
          status: "Operational",
        },
        {
          type: "Field Radios",
          quantity: 100,
          status: "Operational",
        },
      ],
    },
    missions: [
      {
        missionName: "Operation Desert Storm",
        startDate: "1991-01-17",
        endDate: "1991-02-28",
        description: "Combat operation to liberate Kuwait from Iraqi occupation.",
      },
      {
        missionName: "Operation Enduring Freedom",
        startDate: "2001-10-07",
        endDate: "2014-12-28",
        description:
          "Military operations aimed at dismantling al-Qaeda and removing the Taliban from power in Afghanistan.",
      },
    ],
    trainingPrograms: [
      {
        programName: "Basic Combat Training",
        duration: 10,
        focus:
          "Fundamentals of soldiering, physical conditioning, and basic combat skills.",
      },
      {
        programName: "Advanced Individual Training",
        duration: 12,
        focus:
          "Specialized training for specific military occupational specialties.",
      },
    ],
    history: [
      {
        eventDate: "1941-06-01",
        eventDescription: "Establishment of the 1st Infantry Division.",
      },
      {
        eventDate: "1944-06-06",
        eventDescription: "Participated in the D-Day landings in Normandy.",
      },
    ],
    currentDeployment: {
      location: "Middle East",
      mission: "Counter-terrorism operations",
      startDate: "2024-01-01",
      estimatedEndDate: "2024-12-31",
    },
  };


  const Mission1 = military => {
    const chief = military.commandStructure.chiefOfStaff;
    return `${chief.rank} ${chief.name} ${chief.contact.phone}`
  }
//   console.log(Mission1(militaryUnit));





  const Mission2 = military => military.personnel.length.toString();
//   console.log(Mission2(militaryUnit));




function Mission3(NewDeployment, military){
    
    military.history.push(military.currentDeployment);
    military.currentDeployment = NewDeployment;

    return military
}


// console.log(Mission3(NewDeployment, militaryUnit));



function Mission4(Firearm_Object, military){
    const firearm = military.equipment.firearms;
    
    //מעבר על רשימת הנשקים באובייקט
    for (let index = 0; index < firearm.length; index++) {
        if (firearm[index].type == Firearm_Object.type && firearm[index].status == Firearm_Object.status){
            firearm[index].quantity += Firearm_Object.quantity;
            return military;
        }
    }
    //במידה ולא נמצא ברשימת הנשקים
    firearm.push(Firearm_Object);
    return military;
}



function Mission5(military){
    
    // מעבר על כל ההכשרות והשמה של מספר השבועות
    let numberOftrainingPrograms = 0;
    military.trainingPrograms.forEach(element => {
        numberOftrainingPrograms += element.duration;

    });
    return numberOftrainingPrograms.toString();
}


// console.log(Mission5(militaryUnit));
