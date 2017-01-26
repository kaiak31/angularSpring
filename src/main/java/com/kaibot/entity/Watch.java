package com.kaibot.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Created by kaiak31 on 1/25/17.
 */
@Document(collection = "watches")
public class Watch {
  @Id
  @JsonIgnore
  private String id;

  private String name;

  private String sku;

  private Double price;


  public Watch(String name, String sku, Double price) {
    this.name = name;
    this.sku = sku;
    this.price = price;
  }


  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getSku() {
    return sku;
  }

  public void setSku(String sku) {
    this.sku = sku;
  }

  public Double getPrice() {
    return price;
  }

  public void setPrice(Double price) {
    this.price = price;
  }
}
