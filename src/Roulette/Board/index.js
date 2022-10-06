import React from 'react';
import NumCell from './CellsTypes/NumCell';
import ZeroCell from './CellsTypes/ZeroCell';
import TwoToOne from './CellsTypes/TwoToOne';
import Twelve from "./CellsTypes/Twelve";
import Double from "./CellsTypes/Double";
import { GeneralDiv, FullDiv, LineDiv, ThirdSection, Numbers, LeftSide, Doubles } from "./style";
import { RED, BLACK, GREEN, ONE_ST_12, TWO_ND_12, THREE_RD_12, RED_CELL, BLACK_CELL, ODD, EVEN, HIGH, LOW } from "./../Utils/constants";

const Board = () => {
    return (
        <GeneralDiv>
            <FullDiv>
                <ZeroCell bgColor={GREEN} />
                <ThirdSection>
                    <LeftSide>
                        <Doubles>
                            <Double bgColor={GREEN} text={LOW} />
                            <Double bgColor={GREEN} text={EVEN} />
                        </Doubles>
                        <Twelve text={ONE_ST_12} bgColor={GREEN} />
                    </LeftSide>
                    <Numbers>
                        <LineDiv>
                            <NumCell number={"1"} bgColor={RED} />
                            <NumCell number={"2"} bgColor={BLACK} />
                            <NumCell number={"3"} bgColor={RED} />
                        </LineDiv>
                        <LineDiv>
                            <NumCell number={"4"} bgColor={BLACK} />
                            <NumCell number={"5"} bgColor={RED} />
                            <NumCell number={"6"} bgColor={BLACK} />
                        </LineDiv>
                        <LineDiv>
                            <NumCell number={"7"} bgColor={RED} />
                            <NumCell number={"8"} bgColor={BLACK} />
                            <NumCell number={"9"} bgColor={RED} />
                        </LineDiv>
                        <LineDiv>
                            <NumCell number={"10"} bgColor={BLACK} />
                            <NumCell number={"11"} bgColor={BLACK} />
                            <NumCell number={"12"} bgColor={RED} />
                        </LineDiv>
                    </Numbers>
                </ThirdSection>
                <ThirdSection>
                    <LeftSide>
                        <Doubles>
                            <Double bgColor={RED} text={RED_CELL} />
                            <Double bgColor={BLACK} text={BLACK_CELL} />
                        </Doubles>
                        <Twelve text={TWO_ND_12} bgColor={GREEN} />
                    </LeftSide>
                    <Numbers>
                        <LineDiv>
                            <NumCell number={"13"} bgColor={BLACK} />
                            <NumCell number={"14"} bgColor={RED} />
                            <NumCell number={"15"} bgColor={BLACK} />
                        </LineDiv>
                        <LineDiv>
                            <NumCell number={"16"} bgColor={RED} />
                            <NumCell number={"17"} bgColor={BLACK} />
                            <NumCell number={"18"} bgColor={RED} />
                        </LineDiv>
                        <LineDiv>
                            <NumCell number={"19"} bgColor={RED} />
                            <NumCell number={"20"} bgColor={BLACK} />
                            <NumCell number={"21"} bgColor={RED} />
                        </LineDiv>
                        <LineDiv>
                            <NumCell number={"22"} bgColor={BLACK} />
                            <NumCell number={"23"} bgColor={RED} />
                            <NumCell number={"24"} bgColor={BLACK} />
                        </LineDiv>
                    </Numbers>
                </ThirdSection>
                <ThirdSection>
                    <LeftSide>
                        <Doubles>
                            <Double bgColor={GREEN} text={ODD} />
                            <Double bgColor={GREEN} text={HIGH} />
                        </Doubles>
                        <Twelve text={THREE_RD_12} bgColor={GREEN} />
                    </LeftSide>
                    <Numbers>
                        <LineDiv>
                            <NumCell number={"25"} bgColor={RED} />
                            <NumCell number={"26"} bgColor={BLACK} />
                            <NumCell number={"27"} bgColor={RED} />
                        </LineDiv>
                        <LineDiv>
                            <NumCell number={"28"} bgColor={BLACK} />
                            <NumCell number={"29"} bgColor={BLACK} />
                            <NumCell number={"30"} bgColor={RED} />
                        </LineDiv>
                        <LineDiv>
                            <NumCell number={"31"} bgColor={BLACK} />
                            <NumCell number={"32"} bgColor={RED} />
                            <NumCell number={"33"} bgColor={BLACK} />
                        </LineDiv>
                        <LineDiv>
                            <NumCell number={"34"} bgColor={RED} />
                            <NumCell number={"35"} bgColor={BLACK} />
                            <NumCell number={"36"} bgColor={RED} />
                        </LineDiv>
                    </Numbers>
                </ThirdSection>
                <LineDiv>
                    <TwoToOne bgColor={GREEN} indent={true} />
                    <TwoToOne bgColor={GREEN} />
                    <TwoToOne bgColor={GREEN} />
                </LineDiv>
            </FullDiv>
        </GeneralDiv>
    );
};

export default Board;

