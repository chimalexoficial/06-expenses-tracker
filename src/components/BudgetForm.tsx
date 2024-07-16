import { useState } from "react"



const BudgetForm = () => {
    const [budget, setBudget] = useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBudget(+e.target.value);
    }

    return (
        <form className="space-y-5">
            <div className="flex flex-col space-y-5">
                <label
                    htmlFor="budget"
                    className="text-4xl text-blue-600 font-bold text-center">What's your budget?</label>

                <div className="grid grid-cols-2">
                    <div>
                        <label
                            htmlFor="budget"
                            className="text-4xl text-blue-600 font-bold text-center">$</label>
                    </div>
                    <div>
                        <input
                            id="budget"
                            name="budget"
                            type="number"
                            className="w-full bg-white border border-gray-200 p-2"
                            value={budget}
                            onChange={handleChange}
                            min={0} />
                    </div>
                </div>
            </div>

            {
                budget === 0 ? <input
                    type="submit"
                    value="Ready!"
                    className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-black uppercase disabled:opacity-40"
                    disabled={true}
                /> : <input
                    type="submit"
                    value="Ready!"
                    className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-black uppercase"
                    disabled={false}
                />
            }

        </form>
    )
}

export default BudgetForm