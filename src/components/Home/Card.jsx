import React from 'react'





const CardData = [
    {
        id: '1',
        title: 'New Chat',
        url: '',
        img:'./assets/undraw_Chatting_re_j55r.png'
    },
    {
        id: '2',
        title: 'Group Chats',
        url: '',
        img:'./assets/undraw_Group_hangout_re_4t8r.png'
    },
    {
        id: '3',
        title: 'Random Chat',
        url: '',
        img:'./assets/undraw_Online_messaging_re_qft3.png'
    }
]


export default function Card() {
    return (
        <>
            <div className="container d-flex">
                <div className="row g-2" >
                {CardData.map((data) => {
                    return <>

                        <div className="col-md " key={data.id}>
                            <div className="card bg-dark" >
                                <img src={data.img}className="card-img-top " alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title ">{data.title}</h5>
                                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                </div>
                            </div>
                        </div>
                    </>
                })}
            </div>
        </div>

        </>
    )
}



