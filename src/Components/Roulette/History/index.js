import React from 'react';
import { useSelector } from 'react-redux'
import { GeneralDiv, Table, TBody, TR, TD, TH } from "./style";
import { TITLE } from "./utils"
import { getColor } from "./../../Roulette/Spinner/rouletteOptions"

const History = () => {
    const lastResults = useSelector((state) => state.historyRouletteResults.value)
    return (
        <GeneralDiv>
            <Table>
                <TBody>
                    <TR>
                        <TH>{TITLE}</TH>
                    </TR>
                    {
                        lastResults.map((lastResult, index) => {
                            const color = getColor(lastResult)
                            return (
                                <TR key={index}>
                                    <TD numberColor={color}>{lastResult}</TD>
                                </TR>
                            )
                        })
                    }
                </TBody>
            </Table>
        </GeneralDiv>
    );
};

export default History;