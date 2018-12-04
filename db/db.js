//Dummy database for incident
const reports = [{
        id: 1,
        createdOn: "23/11/2018", //date
        createdBy: "Chike Nnamadim",
        title: "Internet Fruad",
        type: "Red-flag",
        location: "lat, long",
        status: "Approved",
        images: "image, image",
        video: "video, video",
        comment: "A red flag record. that talk about Internet fraud and how it affects our society"
    },
    {
        id: 2,
        createdOn: "23/11/2018", //date
        createdBy: "Chike Nnamadim",
        title: "Examination Malpractice",
        type: "Incident",
        location: "lat, long",
        status: "Approved",
        images: "image, image",
        video: "video, video",
        comment: "It has come to my notice that majority of our Secondary school student no long prepare for Examinations, this is because they depend on assistance sometimes rendered by Schools, and examination centers"
    },
    {
        id: 3,
        createdOn: "23/11/2018", //date
        createdBy: "Chike Nnamadim",
        title: "Poor Power Supply",
        type: "Red-flag",
        location: "lat, long",
        status: "Approved",
        images: "image, image",
        video: "video, video",
        comment: "Poor Power supply is becoming a major issue, mostly because citizen now pay more and get less!"
    },
    {
        id: 4,
        createdOn: "23/11/2108", //date
        createdBy: "Chike Nnamadim",
        title: "Pot holes",
        type: "Red-flag",
        location: "lat, long",
        status: "Approved",
        images: "image, image",
        video: "video, video",
        comment: "A red flag record. that talk about Internet fraud and how it affects our society"
    }
]

//Dummy database for User
const users = [{
        id: 1,
        firstname: "Chike",
        lastname: "Nnamadim",
        othernames: "Jerry",
        email: "johndoe@example.com",
        phoneNumber: "0814******0",
        username: "Perfected1",
        registered: "03/12/2018",
        isAdmin: false
    },
    {
        id: 2,
        firstname: "Shola",
        lastname: "Adeshoji",
        othernames: "Emmanuel",
        email: "johndoe@example.com",
        phoneNumber: "0814******0",
        username: "Perfected1",
        registered: "03/12/2018",
        isAdmin: false

    },
    {
        id: 3,
        firstname: "Mohammed",
        lastname: "Adamu",
        othernames: "Issa",
        email: "johndoe@example.com",
        phoneNumber: "0814******0",
        username: "Perfected1",
        registered: "03/12/2018",
        isAdmin: false
    }
]

export default reports;
