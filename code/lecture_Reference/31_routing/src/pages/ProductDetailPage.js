import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productInfos } from '../components/ProductList';

export default function ProductDetailPage() {
    const { productId } = useParams(); // {productId : '2'}
    //   console.log(parameter);
    console.log(productId); // '2'
    console.log(productInfos);

    const navigate = useNavigate();
    const targetProduct = productInfos[Number(productId) - 1];
    /**
     * (참고)
     * URL 파라미터는 기본적으로 문자열로 처리됩니다.
     * Number(productId)를 사용하여 문자열을 숫자로 변환합니다.
     * 예를 들어, productId가 '2'이면,
     * Number(productId)는 숫자 2가 됩니다.
     *
     * 배열의 인덱스는 0부터 시작
     */
    console.log(targetProduct);
    const { id, name, email, body } = targetProduct;

    return (
        <div>
            <h1>ProductDetailPage</h1>
            <button onClick={() => navigate(-1)}>뒤로가기</button>
            <button onClick={() => navigate('/')}>홈으로 이동하기</button>
            <ul>
                <li>상품번호: {id}</li>
                <li>상품명: {name}</li>
                <li>판매자: {email}</li>
                <li>상세설명: {body}</li>
            </ul>
        </div>
    );
}
/**
 * (참고)
 * navigate() 숫자 인자 의미
 * 양수 숫자 ('n')
 * - 현재 페이지에서 'n' 페이지 앞으로 이동
 * ex.) 1 = 다음페이지
 *
 * 음수 숫자 ('-n')
 * - 현재 페이지에서 뒤로 이동
 * ex.) -1 = 이전페이지
 */
