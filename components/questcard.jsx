export const BasicQuestCard = ({ quest }) => {
    return (
        <div className="w-full md:w-1/2 p-1">
            <div className="border-4 border-[#4b3a17] text-[#b1a07f] font-serif p-4 shadow-md w-full">
                <h3 className="text-xl font-bold mb-2">{quest.title}</h3>
            </div>
        </div>
    )
}
