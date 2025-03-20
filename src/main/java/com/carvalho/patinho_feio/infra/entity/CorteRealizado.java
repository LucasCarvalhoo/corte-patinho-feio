package com.carvalho.patinho_feio.infra.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "corte_realizado")
public class CorteRealizado {

    @Id
    private String id;
    @DBRef
    private User user;
    @DBRef
    private ServicoCorte servicoCorte;
    private String dataCorte;
}
