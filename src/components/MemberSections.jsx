const MemberSections = ({members}) => {

    return (
        <div id="members-wrapper">
            {members?.map((member, index) => {
                if(index % 2 === 1) {
                    return (
                        <>
                            <div className="memberSection">
                                <div className="memberTextDiv">
                                    <h1>{member.name}</h1>
                                    <p>{member.text}</p>
                                </div>
                                <div className="memberImgDiv">
                                    <img src={member.img} />
                                </div>
                            </div>
                            {members.length - 1 !== index && <>
                                <hr className="memberHr"></hr>
                            </>}
                        </>
                    )
                } else {
                    return (
                        <>
                            <div className="memberSection">
                                <div className="memberImgDiv">
                                    <img src={member.img} />
                                </div>
                                <div className="memberTextDiv">
                                    <h1>{member.name}</h1>
                                    <p>{member.text}</p>
                                </div>
                            </div>
                            {members.length - 1 !== index && <>
                                <hr className="memberHr"></hr>
                            </>}
                        </>
                    )
                }
            })}
        </div>
    )
}

export default MemberSections;