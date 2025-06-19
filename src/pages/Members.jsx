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
                    name: "Pastor Pablo",
                    img: "https://variety.com/wp-content/uploads/2024/06/5N7A0541-e1718042484447.jpg",
                    text: "As the pastor, I am honored to guide this congregation with compassion and vision. My mission is to nurture spiritual growth and foster a welcoming, inclusive community grounded in faith and service."
                }
            ]
        },
        {
            id: 1,
            name: 'Vestry',
            info: [
                {
                    name: "Vestry Member Anna",
                    img: "https://i.pinimg.com/236x/44/8f/55/448f55c72f4d316bb2221e8975e61c9c.jpg",
                    text: "As a member of the vestry, I help support the church’s mission by overseeing operations and making decisions that affect our congregation’s future. Working together, we strive to be responsible stewards of our resources."
                },
                {
                    name: "Vestry Member Marie",
                    img: "https://media.istockphoto.com/id/1483329842/photo/studio-portrait-of-attractive-woman-wearing-shirt-and-laughing-while-sitting-at-isolated-grey.jpg?s=612x612&w=0&k=20&c=N4Puu0y0FaYrUMcaANbSs8SRF8IbTvsh-sr10fiCyqM=",
                    text: "Serving on the vestry allows me to contribute meaningfully to the life of our church. I focus on community outreach and ensuring our ministries have the support they need to thrive."
                },
                {
                    name: "Vestry Member Thomas",
                    img: "https://i.pinimg.com/236x/44/8f/55/448f55c72f4d316bb2221e8975e61c9c.jpg",
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
                    img: "https://static.wikia.nocookie.net/heroes-and-villain/images/3/3d/Luz_Noceda-Profile-With_Scar.png/revision/latest?cb=20230707042239",
                    text: "Our committees are the heartbeat of our church’s operations. From hospitality to finance, each group plays a vital role in ensuring we function smoothly and faithfully serve our members."
                },
                {
                    name: "Committee Member Ron",
                    img: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/06/pjimage-2021-06-21T151451.576.jpg",
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
                    img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/08/adventure-time-jermaine2.jpg",
                    text: "Our Children and Youth Ministry creates a safe and engaging space for young people to learn about faith, build friendships, and grow spiritually through fun activities and meaningful lessons."
                },
                {
                    name: "Sunday School Leader Tara",
                    img: "https://static.wikia.nocookie.net/heroes-and-villain/images/3/3d/Luz_Noceda-Profile-With_Scar.png/revision/latest?cb=20230707042239",
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