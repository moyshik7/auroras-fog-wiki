export const BasicQuestCard = ({ quest }) => {
    return (
        <div className="w-full md:w-1/2 p-1">
            <div className="quest-card w-full p-4">
                <h3 className="text-xl font-bold mb-0">{quest.title}</h3>
            </div>
        </div>
    )
}

export const BasicQuestCardWithDescription = ({ quest }) => {
    return (
        <div className="w-full md:w-1/2 p-1">
            <div className="quest-card w-full min-h-48 p-4">
                <h3 className="text-xl font-bold mb-2">{quest.title}</h3>
                <p className="text-base">{quest.description}</p>
            </div>
        </div>
    )
}

export const QuestCard = ({ quest }) => {
    return (
        <div className="w-full md:w-1/2 p-1">
            <div className="quest-card w-full p-4">
                <h3 className="text-xl font-bold mb-2">{quest.title}</h3>
                <p className="text-base mb-2">{quest.description}</p>
                <ul className="list-disc list-inside">
                    {quest.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}