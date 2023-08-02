import LoveIcon from "../../../components/Icons/LoveIcon/LoveIcon";
import { LoveFilterButton } from "../Home.styles";

export default function LoveFilter({ onClick }) {
  return (<LoveFilterButton onClick={onClick}><LoveIcon width={20} height={20} />Somente favoritos</LoveFilterButton>)
}