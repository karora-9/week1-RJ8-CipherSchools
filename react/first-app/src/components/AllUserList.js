import React from "react";

const AllUserList = () => {
    let allUsers = [
        {name: "Kanishka", email: "kanishka@email.com", phoneNumber: "1232399999"},
        {name: "Gauri", email: "gauri@email.com", phoneNumber: "1223567777"},
        {name: "Ahmad", email: "ahamd@email.com", phoneNumber: "1583445555"},

 

    ];
    return (
        <div>
        <userDetails user={allUsers[0]} />
        <userDetails user={allUsers[1]} />
        <userDetails user={allUsers[2]} />
        </div>
    )
};

export default AllUserList;