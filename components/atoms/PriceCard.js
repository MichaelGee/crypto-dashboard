import styled from "@emotion/styled";
import PropTypes from "prop-types";
import DownIcon from "../icons/Down";
import UpIcon from "../icons/Up";

const Container = styled.div`
 background: #fff;
 padding: 1rem;
 border-radius: 6px;
 box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0, 3%);
 max-width: 20rem;
 width: 100%;
}


`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
`;
const Icon = styled.img`
  width: 18%;
`;
const CoinName = styled.p`
  margin-left: 1rem;
`;
const Coin = styled.p`
  font-size: ${({ theme }) => theme.font.size.tiniest};
  opacity: 0.5;
`;
const Currency = styled.p`
  font-size: ${({ theme }) => theme.font.size.tiniest};
`;
const Price = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.normal};
  opacity: 0.7;
  font-weight: ${({ theme }) => theme.font.weight.light};
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  jusify-content: center;
`;
const Percentage = styled.p`
  margin-right: 0.5rem;
  font-weight: ${({ theme }) => theme.font.weight.thin};
  font-size: ${({ theme }) => theme.font.size.tiniest};
  color: ${({ theme }) => theme.colors.green};
`;
const Arrow = styled.img``;

export const PriceCard = (props) => {
  const { logo_url, currency, name, price, price_change_pct } = props;
  return (
    <Container>
      <Top>
        <Left>
          <Icon src={logo_url} />
          <CoinName>
            <Currency>{currency}</Currency>
            <Coin>{name}</Coin>
          </CoinName>
        </Left>
        <Right>
          <Percentage>+{price_change_pct}%</Percentage>
          <UpIcon />
        </Right>
      </Top>
      <Price>${price}</Price>
    </Container>
  );
};

PriceCard.propTypes = {
  logo_url: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  price_change_pct: PropTypes.number.isRequired,
};

PriceCard.defaultProps = {
  logo_url:
    "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg",
  currency: "BTC",
  name: "Bitcoin",
  price: "8451.365",
  price_change_pct: "0.03297",
};
