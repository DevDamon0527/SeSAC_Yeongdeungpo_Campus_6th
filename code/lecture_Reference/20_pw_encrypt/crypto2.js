// crypto 모듈로 양방향 암호화 구현하기
const crypto = require('crypto');

// 암호화에 사용할 키와 IV(Initialization Vector)를 정의합니다.
// 여기서는 예제로 'aes-256-cbc' 알고리즘을 사용하며, 이 경우 키의 길이는 32바이트, IV의 길이는 16바이트가 필요합니다.
const key = crypto.randomBytes(32); // 임의의 32바이트 키 생성
const iv = crypto.randomBytes(16); // 임의의 16바이트 IV 생성
const algorithm = 'aes-256-cbc'; // 256비트 키를 사용, 블록크기는 128비트

// 원본 메시지 정의
const originalMessage = 'Hello, World!';

// 암호화 함수
function encrypt(text) {
  // createCipheriv(알고리즘, 비밀키, IV): 암호화 객체 생성
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  // update(암호화할데이터, 입력 인코딩, 출력 인코딩): 데이터 암호화
  let encrypted = cipher.update(text, 'utf8', 'base64');

  // 최종 결과 생성
  encrypted += cipher.final('base64');

  // 암호화된 데이터 반환
  return encrypted;
}

// 복호화 함수
function decrypt(encryptedText) {
  // createDecipheriv(알고리즘, 비밀키, IV): 복호화 객체 생성
  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  // update(복호화할데이터, 입력 인코딩, 출력 인코딩): base64로 인코딩된 문자열이 utf8 형태로 복호화
  let decrypted = decipher.update(encryptedText, 'base64', 'utf8');

  // 최종 결과 생성
  decrypted += decipher.final('utf8');

  // 복호화된 데이터 반환
  return decrypted;
}

// createCipheriv, createDecipheriv 함수로 각각 암호화, 복호화 객체 생성

// 메시지를 암호화하고 복호화하는 예제
const encryptedMessage = encrypt(originalMessage);
console.log(`Encrypted Message: ${encryptedMessage}`);

const decryptedMessage = decrypt(encryptedMessage);
console.log(`Decrypted Message: ${decryptedMessage}`);

// 참고. 초기 벡터(Initialization Vector, IV)란?
// 초기 벡터(Initialization Vector, IV)는 암호화에서 중요한 역할을 하는 무작위의 비밀 수입니다
/*
초기 벡터(Initialization Vector, IV)는 암호화에서 중요한 역할을 하는 무작위의 비밀 수입니다. IV는 일반적으로 블록 암호화 방식에서 사용되며, 특히 블록 체인 모드(CBC, CFB, OFB 등)에서 필수적입니다.
블록 암호화는 일정한 크기의 데이터 블록을 암호화하는 방식이며, 동일한 평문 블록은 항상 동일한 암호문 블록으로 변환됩니다. 이런 특성 때문에 패턴 분석에 취약하게 됩니다. 예를 들어, 같은 메시지가 여러 번 전송되면 같은 암호문이 생성되므로 공격자가 이 패턴을 파악하게 되면 정보를 유출할 위험이 있습니다.
IV는 이러한 문제를 해결하기 위해 사용됩니다. IV는 각 메시지나 세션마다 다르게 설정되며, 각각의 평문 블록과 함께 사용되어 동일한 평문이라도 다른 암호문을 생성하게 합니다. 이렇게 함으로써 반복된 메시지나 패턴의 유출을 방지하여 보안성을 향상시킵니다.
IV는 일반적으로 난수로 생성되며 공개될 수 있습니다. 하지만 중요한 점은 한번 사용된 IV는 절대 재사용해서는 안된다는 것입니다. 만약 재사용한다면 위에서 언급한 보안성 향상 효과가 사라집니다.
또 하나 주의해야 할 점은 IV가 비밀 정보 자체를 보호하지 않으므로, 별도의 키(비밀번호) 없이 단독으로 사용되어서는 안된다는 것입니다.
*/
