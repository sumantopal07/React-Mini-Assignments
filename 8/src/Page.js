import React, { useContext } from 'react';
import { DataContext } from '.';
const Page = React.memo(() => {
    const { data,loading } = useContext(DataContext);
    return (
        <section className="photos">
            <div className="photos-center">
                {
                    data.map((item,index) => {
                        return (
                            <article key={index} className="photo">
                                <img src={item.urls.regular} alt="blue egg on brown wooden surface" />
                                <div className="photo-info">
                                    <div>
                                        <h4>{item.user.first_name} {item.user.last_name}</h4>
                                        <p>{item.user.total_likes} likes</p>
                                    </div>
                                    <a href={item.user.portfolio_url}>
                                        <img src={item.user.profile_image.small} alt="" className="user-img" />
                                    </a>
                                </div>
                            </article>
                        )
                    })
                }

            </div>
            {loading && <h2 className='loading'>Loading...</h2>}
        </section>
    );
})

export default Page;