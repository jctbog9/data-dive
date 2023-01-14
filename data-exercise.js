const officeBuilding = {
  address: '93 Irving St, Watertown MA, 02472',
  color: 'Blue',
  floors: [
    {
      id: 1,
      squareFeet: 10000,
      tenants: [
        {
          id: 1,
          name: 'Example Corp',
          monthlyRent: 5000,
          squareFeet: 3000,
          hasCornerOffice: true,
          primaryContact: {
            name: 'John Smith',
            phoneNumber: '617-123-4567',
            notes: [
              'Likes fishing',
              'Always reliable'
            ]
          }
        },
        {
          id: 2,
          name: 'IE LLC',
          monthlyRent: 3000,
          squareFeet: 2000,
          hasCornerOffice: false,
          primaryContact: {
            name: 'Sketch Mgee',
            phoneNumber: '617-617-6177',
            notes: [
              'Often late on rent',
              'May need to start the eviction process if payments are late again'
            ]
          }
        },
        {
          id: 3,
          name: 'Simple Soft',
          monthlyRent: 4000,
          squareFeet: 2500,
          hasCornerOffice: false,
          primaryContact: {
            name: 'Guy Adams',
            phoneNumber: '781-123-1122',
            notes: [
              'Pays in cash',
              'Always pays early',
              'Keeps the unit maintained well'
            ]
          }
        },
        {
          id: 4,
          name: 'Electronic Depot HQ',
          monthlyRent: 4000,
          squareFeet: 2500,
          hasCornerOffice: false,
          primaryContact: {
            name: 'Sally Susan',
            phoneNumber: '214-723-5543',
            notes: [
              'New Tenant'
            ]
          }
        }
      ]
    },
    {
      id: 2,
      squareFeet: 10000,
      tenants: [
        {
          id: 1,
          name: 'WWE HQ',
          monthlyRent: 9000,
          squareFeet: 6000,
          hasCornerOffice: true,
          primaryContact: {
            name: 'John Cena',
            phoneNumber: '458-123-7775',
            notes: [
              'Former wrestler',
              'Always reliable'
            ]
          }
        },
        {
          id: 2,
          name: 'Santa\'s Workshop',
          monthlyRent: 7000,
          squareFeet: 4000,
          hasCornerOffice: false,
          primaryContact: {
            name: 'Scott Calvin',
            phoneNumber: '912-925-0000',
            notes: [
              'Hard to reach on December 24th for some reason',
              'Always offers me cookies and milk',
              'Gives more rent every single month despite me telling him that is unnecessary'
            ]
          }
        },
      ]
    }
  ]
}

// Make the following problems "true" by writing your code in the first part of the console.log() statement
// i.e. console.log(officeBuilding.color === 'Blue')

// The address of the office building
console.log( === '93 Irving St, Watertown MA, 02472')

// The second floor's second tenant's primary contact name
console.log( === 'Scott Calvin')

// Santa's Workshop ID
console.log( === 2)

// Electronic Depot HQ's monthly rent
console.log( === 4000)

// Print the solutions to the following questions in the console:
// What is Example Corp's office square footage?

// Which primary contact "Likes Fishing"?

// Who is the primary contact for WWE HQ?

// How many floors does the office building have? Print out the code for how we can measure that below.

// Does the second floor's second tenant have a corner office? Printe out the answer below.

// What is the company name that Sally Susan works for?

// Does IE LLC have a corner office?
