import React , {forwardRef} from "react";

const ForWardRef = (props,ref) => 
{
    return(
        <>
        <div className="mt-5 mb-2 center ">
            <h2>For Ward Ref </h2>
            <input type="text" ref={ref} />
        </div>
        </>
    )
}
export default forwardRef(ForWardRef)