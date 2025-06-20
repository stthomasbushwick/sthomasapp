import MembersDropDown from "../components/MembersDropDown";
import MemberSections from "../components/MemberSections";
import MobileMemberSections from "../components/MobileMemberSections";
import { useState } from "react";
const Members = () => {
    const people = [
        {
            id: 0,
            name: 'Pastor',
            info: [
                {
                    name: "The Reverend Canon Ryan A. Boyce",
                    img: "https://stthomasbushwick.org/uploads/2024/08/DBD7B922-59D1-455D-B846-ADB8880DF777-2048x1365.jpg",
                    text: "Recipient of the 2023 Consul General’s Award for Religion and Community Outreach, Reverend Canon Ryan A. Boyce is a Barbados-born priest and community leader with a strong background in law, theology, and youth advocacy. With service spanning Barbados, the Caribbean, and the United States, he has held pastoral and chaplaincy roles in churches, police departments, and juvenile justice systems. He currently serves as a clergy liaison for the NYPD’s 103rd Precinct and is deeply committed to youth development and community outreach."
                }
            ]
        },
        {
            id: 1,
            name: 'Vestry',
            info: [
                {
                    name: "Vestry Member Anna",
                    img: "https://media.istockphoto.com/id/1587604256/photo/portrait-lawyer-and-black-woman-with-tablet-smile-and-happy-in-office-workplace-african.jpg?s=612x612&w=0&k=20&c=n9yulMNKdIYIQC-Qns8agFj6GBDbiKyPRruaUTh4MKs=",
                    text: "As a member of the vestry, I help support the church’s mission by overseeing operations and making decisions that affect our congregation’s future. Working together, we strive to be responsible stewards of our resources."
                },
                {
                    name: "Vestry Member Marie",
                    img: "https://www.denverheadshotco.com/wp-content/uploads/2023/06/Company-Headshots-scaled.jpg",
                    text: "Serving on the vestry allows me to contribute meaningfully to the life of our church. I focus on community outreach and ensuring our ministries have the support they need to thrive."
                },
                {
                    name: "Vestry Member Thomas",
                    img: "https://portraitpal.ai/wp-content/uploads/2024/08/corporate-headshot.jpg",
                    text: "Being part of the vestry has deepened my faith and strengthened my relationships within the church. I’m committed to transparent leadership and inclusive growth."
                }
            ]
        },
        {
            id: 2,
            name: 'Committees',
            info: [
                {
                    name: "Committee Lead Clara",
                    img: "https://t4.ftcdn.net/jpg/04/43/25/95/360_F_443259545_PsPbDmm8HY7JLQU9Ew9DPOdAHtIhMtnD.jpg",
                    text: "Our committees are the heartbeat of our church’s operations. From hospitality to finance, each group plays a vital role in ensuring we function smoothly and faithfully serve our members."
                },
                {
                    name: "Committee Member Ron",
                    img: "https://images.squarespace-cdn.com/content/54c6eb0ce4b0f6cdd67c1196/98324561-dd8c-48f2-8c24-3b620abb0cc0/San_Diego_Professional_Headshots_Professional+_Session_0013.jpg?content-type=image%2Fjpeg",
                    text: "Joining a committee is a great way to get involved and make a difference. We welcome everyone to bring their talents and ideas to support our shared mission."
                }
            ]
        },
        {
            id: 3,
            name: 'Children/Youth',
            info: [
                {
                    name: "Youth Director Jessie",
                    img: "https://danielmottaphotography.com/blog/wp-content/uploads/2022/12/Olivia-Viccaro-Headshot-Master-scaled.jpg",
                    text: "Our Children and Youth Ministry creates a safe and engaging space for young people to learn about faith, build friendships, and grow spiritually through fun activities and meaningful lessons."
                },
                {
                    name: "Sunday School Leader Tara",
                    img: "https://images.squarespace-cdn.com/content/v1/54c6eb0ce4b0f6cdd67c1196/1743545008261-OBXL69GKOQLXMVJ722DI/DCP_0085_%282%29.jpg",
                    text: "From Sunday school to teen retreats, we offer programs designed to inspire the next generation and help them develop a strong foundation in their beliefs."
                }
            ]
        }
    ];    
    
    const [selected, setSelected] = useState(people[0])
    return (
        <div>
            <div id="membersTitleDiv">
                <h1>Members Of Our Church</h1>
                <MembersDropDown selected={selected} setSelected={setSelected} people={people}/>
            </div>
            <MemberSections members={selected.info}/> 
            <MobileMemberSections members={selected.info}/>
        </div>
    )
}

export default Members;