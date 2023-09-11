import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="w-1/3  bg-gray-300 ml-4 mt-2">
            <div>
                <h2 className="text-3xl text-center mb-6">Spent time length : {readingTime} min</h2>
            </div>
            <div>
            <h1 className="text-3xl text-center">Bookmarked Blogs : {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired,
}
export default Bookmarks;