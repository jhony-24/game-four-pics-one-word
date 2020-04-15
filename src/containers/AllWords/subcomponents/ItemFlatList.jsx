import React from "react";
import RowItem from "src/components/molecules/RowItem"
import Paragraph from "src/components/molecules/Paragraph"
import CircleImageSquare from "src/components/molecules/CircleImageSquare"
import { FaEllipsisV } from "react-icons/fa"
import Flex from "src/components/dom/Flex"
import IconNatural from "src/components/atoms/IconNatural"
import { IoMdStar } from "react-icons/io"
import { navigate } from 'gatsby';



const ItemFlatList = ({ current, images, letters }) => (
    <RowItem
        onClick={() => navigate("/word", { state: current })}
        styles={{ padding: "20px 10px" }}
        leftBody={
            <CircleImageSquare images={images} styles={{ marginRight: 5 }} />
        }
        centerBody={
            <Flex>
                <Paragraph title={letters + "..."} detail={new Date().toLocaleString()} />
                <IconNatural icon={<IoMdStar />} coloricon="darkorange" text={""} />
            </Flex>
        }
        rightBody={
            <FaEllipsisV size={14} color="gray" />
        } />
)


export default ItemFlatList;