package com.ssafy.moeutto.domain.member.auth;

import com.ssafy.moeutto.domain.member.jwt.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.UUID;

/**
 * AuthTokens를 발급하는 클래스
 */
@Component
@RequiredArgsConstructor
public class AuthTokensGenerator {

    private static final long ACCESS_TOKEN_EXPIRE_TIME = 1000 * 60 * 60 * 24;    // 30분
    private static final long REFRESH_TOKEN_EXPIRE_TIME = 1000 * 60 * 60 * 24;   // 2시간

    private final JwtTokenProvider jwtTokenProvider;

    /**
     * memberId 받아 AccessToken 생성
     *
     * @param memberId
     * @return
     */
    public AuthTokens generate(UUID memberId) {
        long now = (new Date()).getTime();
        Date accessTokenExpiresAt = new Date(now + ACCESS_TOKEN_EXPIRE_TIME);
        Date refreshTokenExpiredAt = new Date(now + REFRESH_TOKEN_EXPIRE_TIME);

        String subject = memberId.toString();
        String accessToken = jwtTokenProvider.generate(subject, accessTokenExpiresAt);
        String refreshToken = jwtTokenProvider.generate(subject, refreshTokenExpiredAt);

        return AuthTokens.of(accessToken, refreshToken, ACCESS_TOKEN_EXPIRE_TIME / 1000L);
    }

    /**
     * AccessToken에서 memberId 추출
     *
     * @param accessToken
     * @return
     */
    public UUID extractMemberId(String accessToken) {
        return UUID.fromString(jwtTokenProvider.extractSubject(accessToken));
    }
}
