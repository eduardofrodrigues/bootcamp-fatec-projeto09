package com.abutua.sellers.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abutua.sellers.models.Seller;

public interface SellerRepository extends JpaRepository<Seller, Integer> {
}
