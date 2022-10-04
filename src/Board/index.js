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
                            <NumCell Number={1} bgColor={RED} />
                            <NumCell Number={2} bgColor={BLACK} />
                            <NumCell Number={3} bgColor={RED} />
                        </LineDiv>
                        <LineDiv>
                            <NumCell Number={4} bgColor={BLACK} />
                            <NumCell Number={5} bgColor={RED} />
                            <NumCell Number={6} bgColor={BLACK} />
                        </LineDiv>
                        <LineDiv>
                            <NumCell Number={7} bgColor={RED} />
                            <NumCell Number={8} bgColor={BLACK} />
                            <NumCell Number={9} bgColor={RED} />
                        </LineDiv>
                        <LineDiv>
                            <NumCell Number={10} bgColor={BLACK} />
                            <NumCell Number={11} bgColor={BLACK} />
                            <NumCell Number={12} bgColor={RED} />
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
                            <NumCell Number={13} bgColor={BLACK} />
                            <NumCell Number={14} bgColor={RED} />
                            <NumCell Number={15} bgColor={BLACK} />
                        </LineDiv>
                        <LineDiv>
                            <NumCell Number={16} bgColor={RED} />
                            <NumCell Number={17} bgColor={BLACK} />
                            <NumCell Number={18} bgColor={RED} />
                        </LineDiv>
                        <LineDiv>
                            <NumCell Number={19} bgColor={RED} />
                            <NumCell Number={20} bgColor={BLACK} />
                            <NumCell Number={21} bgColor={RED} />
                        </LineDiv>
                        <LineDiv>
                            <NumCell Number={22} bgColor={BLACK} />
                            <NumCell Number={23} bgColor={RED} />
                            <NumCell Number={24} bgColor={BLACK} />
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
                            <NumCell Number={25} bgColor={RED} />
                            <NumCell Number={26} bgColor={BLACK} />
                            <NumCell Number={27} bgColor={RED} />
                        </LineDiv>
                        <LineDiv>
                            <NumCell Number={28} bgColor={BLACK} />
                            <NumCell Number={29} bgColor={BLACK} />
                            <NumCell Number={30} bgColor={RED} />
                        </LineDiv>
                        <LineDiv>
                            <NumCell Number={31} bgColor={BLACK} />
                            <NumCell Number={32} bgColor={RED} />
                            <NumCell Number={33} bgColor={BLACK} />
                        </LineDiv>
                        <LineDiv>
                            <NumCell Number={34} bgColor={RED} />
                            <NumCell Number={35} bgColor={BLACK} />
                            <NumCell Number={36} bgColor={RED} />
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

