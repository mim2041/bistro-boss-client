

const RecommendCard = ({item}) => {
    const {image, name, recipe} = item;

    return (
        <div>
            <div className="card w-64 h-[450px] bg-base-100 shadow-xl">
                <figure className="h-48"><img src={image} className="w-full" alt="offered" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-outline border-0 border-b-4 mt-4 mx-auto text-orange-600">Add To cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecommendCard;