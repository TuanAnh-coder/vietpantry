const Rating = ({ rating = 4 }: { rating?: number }) => {
    return (
        <div className="flex items-center gap-[2px] text-2xl">
            {Array.from({ length: 5 }).map((_, index) => (
                <span
                    key={index}
                    className={
                        index < rating
                            ? "text-orange-400"
                            : "text-gray-200"
                    }
                >
                    ★
                </span>
            ))}
        </div>
    );
};
export { Rating }