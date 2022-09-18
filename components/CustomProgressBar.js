import { Progress } from "@material-tailwind/react";

function CustomProgressBar({value,}) {
    return (
        <div className="flex w-full flex-col gap-4">
    <Progress value={value} color="purple" />
    </div>
    )
}

export default CustomProgressBar
