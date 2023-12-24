import { FaStar } from "react-icons/fa";

const Review = ({ review }) => {
    return (
        <li className="grid grid-cols-2 md:grid-cols-[300px_1fr] pb-[100px]">
            <div className="grid grid-cols-2">
                <img
                    src={review?.author_details?.avatar_path?.slice(1)}
                    alt={review?.author}
                    className="rounded-full mr-4"
                />
                <div>
                    <h4>{review?.author}</h4>
                    <h5 className="text-sm my-2 text-stone-400">@{review?.author_details?.username}</h5>
                    <div className="flex items-center text-xl">
                        <h6 className="mr-2">{review?.author_details?.rating}</h6>
                        <h6><FaStar className="text-yellow-400" /></h6>
                    </div>
                </div>
            </div>
            <p className="text-sm py-4 md:py-0 md:ml-6 col-span-2 md:col-span-1">{review?.content?.slice(0, 800)}...</p>
        </li>
    )
}

export default Review;