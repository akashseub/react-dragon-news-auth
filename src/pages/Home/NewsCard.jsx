/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'

const NewsCard = ({ news }) => {


    const { author, title, image_url, details } = news;

    return (
        <div className='mb-8'>
            <div className="flex  justify-between">
                <div className="flex space-x-4 items-center">
                    <div>
                        <div className="avatar">
                            <div className="w-8 rounded-full">
                                <img src={author.img} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>{author.name}</h2>
                        <p>{author.published_date}</p>
                    </div>
                </div>

                <div className="">
                    <h2>Bookmark Book</h2>
                </div>
            </div>

            <div>
                <h2 className="text-xl">{title}</h2>
                <img src={image_url} alt="" />
                <p>{details}</p>
            </div>
        </div>
    );
};

export default NewsCard;

NewsCard.propTypes = {
    optionalNode: PropTypes.node,
  };