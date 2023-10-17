create table TipoAcesso (
    Id varchar(36) primary key default newid() not null,
    DescricaoAcesso varchar(100) not null
)
