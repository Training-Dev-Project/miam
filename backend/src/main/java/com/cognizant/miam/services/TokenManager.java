package com.cognizant.miam.services;

import org.springframework.stereotype.Component;

import java.io.Serializable;


@Component
public class TokenManager implements Serializable {
//	public static final long TOKEN_VALIDITY = 10 * 60 * 60;
//	/**
//	 *
//	 */
//	private static final long serialVersionUID = 7008375124389347049L;
//	private final String jwtSecret = "VERY_GOOD_SECRET_WOW_NOBODY_WILL_EVER_THINK_OF-SUCH_A_LONG_SECRET_WOW_OMG";
//
//	public String generateJwtToken(User user) {
//		Map<String, Object> claims = new HashMap<>();
//		return Jwts.builder().setClaims(claims).setSubject(userDetails.getUsername())
//				.setIssuedAt(new Date(System.currentTimeMillis()))
//				.setExpiration(new Date(System.currentTimeMillis() + TOKEN_VALIDITY * 1000))
//				.signWith(SignatureAlgorithm.HS512, jwtSecret).compact();
//	}
//
//	public Boolean validateJwtToken(String token, UserDetails userDetails) {
//		String username = getUsernameFromToken(token);
//		Claims claims = Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody();
//		Boolean isTokenExpired = claims.getExpiration().before(new Date());
//		return (username.equals(userDetails.getUsername()) && !isTokenExpired);
//	}
//
//	public String getUsernameFromToken(String token) {
//		final Claims claims = Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody();
//		return claims.getSubject();
//	}
}