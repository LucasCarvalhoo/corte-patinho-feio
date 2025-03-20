package com.carvalho.patinho_feio.infra.entity;

import com.carvalho.patinho_feio.infra.enums.Roles;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "user")
public class User {

    @Id
    private String id;
    private String nome;
    private String email;
    private String senha;
    private Roles role;
    private String dataCadastro;
}
