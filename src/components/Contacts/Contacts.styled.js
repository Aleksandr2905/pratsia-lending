import styled from "@emotion/styled";

export const StyledForm = styled.form`
  width: 628px;
  padding: 20px;

  display: flex;
  flex-direction: column;

  align-items: flex-start;
  row-gap: 20px;
  align-self: stretch;
`;

export const StyledMainInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 20px;
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledInput = styled.input`
  width: 284px;

  border: none;
  border-bottom: 1px solid var(--typography-blue);
`;

export const StyledLabel = styled.label`
  display: inline-grid;
  gap: 8px;

  width: 100%;
  font-size: 18px;
  font-weight: 500;

  color: var(--light-blue);
`;

export const StyledTextArea = styled.textarea`
  height: 160px;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledListItem = styled.li`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 36px;
  color: var(--blue);
`;

export const Subtitle = styled.h3`
  color: var(--light-blue);
`;

export const StyledLink = styled.a`
  color: var(--light-blue-4);
`;

export const Svg = styled.svg`
  margin-right: 6px;

  width: 20px;
  height: 20px;
  fill: none;
  stroke: var(--orange);
`;

export const SubmitBtn = styled.button`
  padding: 10px;
  width: 200px;
  height: auto;
  border: none;
  border-radius: 14px;
  font-size: 14px;
  text-align: center;
  background-color: var(--blue);
  color: var(--white);
`;
