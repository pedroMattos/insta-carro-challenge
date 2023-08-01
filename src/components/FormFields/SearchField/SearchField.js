import SearchIcon from "../../Icons/SearchIcon/SearchIcon";
import { CustomField, InputWrapper } from "./SearchField.styles";

export default function SearchField({ onChange }) {
  return (
    <InputWrapper>
      <SearchIcon width={20} height={20} />
      <CustomField type="text" placeholder="Procure por heróis" onChange={onChange} />
    </InputWrapper>
  )
}