const MobileMemberSections = ({members}) => {
    return (
        <div id="mobile-member-wrapper">
            <hr className="memberHr"></hr>
            {members?.map((member, index) => {
                return (
                    <>
                        <div className="mobileMemberSection">
                            <h1>{member.name}</h1>
                            <img src={member.img}/>
                            <p>{member.text}</p>
                        </div>
                        {members.length - 1 !== index && <>
                                <hr className="memberHr"></hr>
                        </>}
                    </>
                )
            })}
        </div>
    )
}

export default MobileMemberSections;