import React from 'react';
import NumCell from './CellsTypes/NumCell';
import ZeroCell from './CellsTypes/ZeroCell';
import TwoToOne from './CellsTypes/TwoToOne';
import Twelve from "./CellsTypes/Twelve";
import Double from "./CellsTypes/Double";
import { useSelector } from 'react-redux'
import { GeneralDiv, FullDiv, LineDiv, ThirdSection, Numbers, LeftSide, Doubles } from "./style";
import { RED, BLACK, GREEN, ONE_ST_12, TWO_ND_12, THREE_RD_12, TWO_TO_ONE, RED_CELL, BLACK_CELL, ODD, EVEN, HIGH, LOW } from "../Utils/constants";

const Board = () => {
    const isSpin = useSelector((state) => state.isSpin.value)
    return (
        <GeneralDiv>
            <FullDiv>
                <ZeroCell number={"0"} bgColor={GREEN} disabled={isSpin} />
                <ThirdSection>
                    <LeftSide>
                        <Doubles>
                            <Double number={"low"} bgColor={GREEN} text={LOW} disabled={isSpin} />
                            <Double number={"even"} bgColor={GREEN} text={EVEN} disabled={isSpin} />
                        </Doubles>
                        <Twelve number={"firstThird"} text={ONE_ST_12} bgColor={GREEN} disabled={isSpin} />
                    </LeftSide>
                    <Numbers>
                        <LineDiv>
                            <NumCell number={"1"} bgColor={RED} disabled={isSpin} />
                            <NumCell number={"2"} bgColor={BLACK} disabled={isSpin} />
                            <NumCell number={"3"} bgColor={RED} disabled={isSpin} />
                        </LineDiv>
                        <LineDiv>
                            <NumCell number={"4"} bgColor={BLACK} disabled={isSpin} />
                            <NumCell number={"5"} bgColor={RED} disabled={isSpin} />
                            <NumCell number={"6"} bgColor={BLACK} disabled={isSpin} />
                        </LineDiv>
                        <LineDiv>
                            <NumCell number={"7"} bgColor={RED} disabled={isSpin} />
                            <NumCell number={"8"} bgColor={BLACK} disabled={isSpin} />
                            <NumCell number={"9"} bgColor={RED} disabled={isSpin} />
                        </LineDiv>
                        <LineDiv>
                            <NumCell number={"10"} bgColor={BLACK} disabled={isSpin} />
                            <NumCell number={"11"} bgColor={BLACK} disabled={isSpin} />
                            <NumCell number={"12"} bgColor={RED} disabled={isSpin} />
                        </LineDiv>
                    </Numbers>
                </ThirdSection>
                <ThirdSection>
                    <LeftSide>
                        <Doubles>
                            <Double number={"red"} bgColor={RED} text={RED_CELL} disabled={isSpin} />
                            <Double number={"black"} bgColor={BLACK} text={BLACK_CELL} disabled={isSpin} />
                        </Doubles>
                        <Twelve number={"seconedThird"} text={TWO_ND_12} bgColor={GREEN} disabled={isSpin} />
                    </LeftSide>
                    <Numbers>
                        <LineDiv>
                            <NumCell number={"13"} bgColor={BLACK} disabled={isSpin} />
                            <NumCell number={"14"} bgColor={RED} disabled={isSpin} />
                            <NumCell number={"15"} bgColor={BLACK} disabled={isSpin} />
                        </LineDiv>
                        <LineDiv>
                            <NumCell number={"16"} bgColor={RED} disabled={isSpin} />
                            <NumCell number={"17"} bgColor={BLACK} disabled={isSpin} />
                            <NumCell number={"18"} bgColor={RED} disabled={isSpin} />
                        </LineDiv>
                        <LineDiv>
                            <NumCell number={"19"} bgColor={RED} disabled={isSpin} />
                            <NumCell number={"20"} bgColor={BLACK} disabled={isSpin} />
                            <NumCell number={"21"} bgColor={RED} disabled={isSpin} />
                        </LineDiv>
                        <LineDiv>
                            <NumCell number={"22"} bgColor={BLACK} disabled={isSpin} />
                            <NumCell number={"23"} bgColor={RED} disabled={isSpin} />
                            <NumCell number={"24"} bgColor={BLACK} disabled={isSpin} />
                        </LineDiv>
                    </Numbers>
                </ThirdSection>
                <ThirdSection>
                    <LeftSide>
                        <Doubles>
                            <Double number={"odd"} bgColor={GREEN} text={ODD} disabled={isSpin} />
                            <Double number={"high"} bgColor={GREEN} text={HIGH} disabled={isSpin} />
                        </Doubles>
                        <Twelve number={"thirdThird"} text={THREE_RD_12} bgColor={GREEN} disabled={isSpin} />
                    </LeftSide>
                    <Numbers>
                        <LineDiv>
                            <NumCell number={"25"} bgColor={RED} disabled={isSpin} />
                            <NumCell number={"26"} bgColor={BLACK} disabled={isSpin} />
                            <NumCell number={"27"} bgColor={RED} disabled={isSpin} />
                        </LineDiv>
                        <LineDiv>
                            <NumCell number={"28"} bgColor={BLACK} disabled={isSpin} />
                            <NumCell number={"29"} bgColor={BLACK} disabled={isSpin} />
                            <NumCell number={"30"} bgColor={RED} disabled={isSpin} />
                        </LineDiv>
                        <LineDiv>
                            <NumCell number={"31"} bgColor={BLACK} disabled={isSpin} />
                            <NumCell number={"32"} bgColor={RED} disabled={isSpin} />
                            <NumCell number={"33"} bgColor={BLACK} disabled={isSpin} />
                        </LineDiv>
                        <LineDiv>
                            <NumCell number={"34"} bgColor={RED} disabled={isSpin} />
                            <NumCell number={"35"} bgColor={BLACK} disabled={isSpin} />
                            <NumCell number={"36"} bgColor={RED} disabled={isSpin} />
                        </LineDiv>
                    </Numbers>
                </ThirdSection>
                <LineDiv>
                    <TwoToOne number={"firstCol"} text={TWO_TO_ONE} bgColor={GREEN} indent={true} disabled={isSpin} />
                    <TwoToOne number={"seconedCol"} text={TWO_TO_ONE} bgColor={GREEN} disabled={isSpin} />
                    <TwoToOne number={"thirdCol"} text={TWO_TO_ONE} bgColor={GREEN} disabled={isSpin} />
                </LineDiv>
            </FullDiv>
        </GeneralDiv>
    );
};

export default Board;

