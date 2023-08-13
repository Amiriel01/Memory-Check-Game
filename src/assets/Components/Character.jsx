import React from "react";


export default function ({
    imageURL,
    name
}){
    return (
        <div>
            <Image src={imageURL} />
            <Text>{name}</Text>
        </div>
    )
}