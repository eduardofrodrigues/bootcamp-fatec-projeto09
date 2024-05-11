package com.abutua.sellers.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class RootController {
    @GetMapping("/")
    public String root() {
        return new String("hello, human!");
    }
}
