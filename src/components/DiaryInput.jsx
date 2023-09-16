import { Input, Button, message } from "antd";
import { useState } from "react";
import { Title } from "./CommonStyles";
import styled from "styled-components";

const { TextArea } = Input;

const DiaryInput = ({ isLoading, onSubmit, messageApi }) => {
  const [userInput, setUserInput] = useState("");
  // 사용자의 입력을 받아, 상위컴포넌트로 데이터를 전달

  // loading 상태 - 사용자가 제출버튼을 못 누르도록 처리
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };
  const handleClick = () => {
    if (!userInput) {
      messageApi.open({
        type: "error",
        content: "일과를 적어주세요.",
      });
      return;
    }
    messageApi.open({
      type: "success",
      content: "생성 요청 완료",
    });

    onSubmit(userInput);
    setUserInput(null);
  };

  /*
  안녕하세요. 저에겐 사귄지 3년쯤된 여친이 있는데요. 
  나이는 저랑 동갑이예요. 귀엽고 싹싹하고 다 좋은데 뭐가 문제냐면 저를 자꾸 때려요. 
  말하다가 장난하듯이 툭 때리는거 있잖아요. 저는 그게 너무 싫고 짜증나요. 
  솔직히 맞아서 기분 좋은 사람 있나요? 
  제가 몇번 싫다고 진지하게 그러지 말라고 얘길 했는데 여친은 저한테 되려 짜증을 내면서 장난으로 몇대 때린걸 가지고 남자가 뭘그리 난리치냐고 해요. 
  하! 나참. 이게 말이 되나요. 맞은 사람이 싫다는데 그만 해야 되는거 아닌가요. 
  얘가 또 손이 매워가지고 웃긴다고 제 어깨를 때리면 진짜로 찰싹 소리가 나게 때려요. 
  하아.... 이 애를 진짜 어쩌면 좋죠? 어떻게 하면 저를 못 때리게 할까요?

  */

  return (
    <div>
      <Title>오늘의 일;</Title>
      <TextArea
        value={userInput}
        onChange={handleUserInput}
        placeholder="오늘 일어난 일들을 간단히 적어주세요."
        style={{ height: "200px" }}
      />
      <ButtonContainer>
        <Button loading={isLoading} onClick={handleClick}>
          GPT 회고록을 작성해줘!
        </Button>
      </ButtonContainer>
    </div>
  );
};

export default DiaryInput;

const ButtonContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
`;
