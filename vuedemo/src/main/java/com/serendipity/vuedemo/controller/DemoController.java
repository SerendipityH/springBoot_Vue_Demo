package com.serendipity.vuedemo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author serendipity
 * @version 1.0
 * @date 2021/5/10 20:55
 */
@CrossOrigin
@RestController
public class DemoController {

    @RequestMapping("/hello")
    public String hello() {
        return "HelloWorld";
    }

}
