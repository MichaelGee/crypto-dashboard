import styled from "@emotion/styled";
import PropTypes from "prop-types";
import DownIcon from "../icons/Down";
import UpIcon from "../icons/Up";
import { useContext} from "react";
import { CoinContext } from "../../context/CoinContext";



const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid #dfe5f9;
  padding: 1rem;
  max-width:30rem;
  cursor :pointer;
  &:hover{
    background: #DFE5F966;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Icon = styled.img`
  width: 18%;
  margin-right: ${({ theme }) => theme.space.one};
`;

const Currency = styled.p`
  font-size: ${({ theme }) => theme.font.size.tiny};
  opacity: 0.6;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  jusify-content: space-between;
`;
const GreenPercentage = styled.p`
  margin-right: 0.5rem;
  font-weight: ${({ theme }) => theme.font.weight.thin};
  font-size: ${({ theme }) => theme.font.size.tiny};
  color: ${({ theme }) => theme.colors.green};
`;
const RedPercentage = styled.p`
  margin-right: 0.5rem;
  font-weight: ${({ theme }) => theme.font.weight.thin};
  font-size: ${({ theme }) => theme.font.size.tiny};
  color: ${({ theme }) => theme.colors.red};
`;

const Price = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.tiny};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  margin-right: 0.5rem;
`;

export const PriceItem = ({ item }) => {
  const { logo_url, currency, price, name } = item;

  const [coinName, setCoinName] = useContext(CoinContext);




  //Format number to currency
  const formatter = new Intl.NumberFormat('en-US', {
    currency: 'USD',
  });
  const roundedPrice = formatter.format(parseFloat(price).toFixed(4));
  const percentage = item["1h"]?.price_change_pct;
  const fixedPercentage = parseFloat(percentage).toFixed(2);

  return (
    <Container onClick={() => setCoinName(name.toLowerCase().replace(/ /g, '-'))}>
      <Left>
        <Icon src={logo_url} />
        <Currency>{currency}</Currency>
      </Left>
      <Right>
        <Price>${roundedPrice}</Price>
        {percentage < 0 ? (
          <RedPercentage>{fixedPercentage}%</RedPercentage>
        ) : (
          <GreenPercentage>{fixedPercentage}%</GreenPercentage>
        )}
        {percentage < 0 ? <DownIcon /> : <UpIcon />}
      </Right>
    </Container>
  );
};

PriceItem.propTypes = {
  logo_url: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  price_change_pct: PropTypes.number.isRequired,
};

PriceItem.defaultProps = {
  logo_url:
    "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg",
  currency: "BTC",
  name: "Bitcoin",
  price: "8451.3",
  price_change_pct: "0.03297",
};
