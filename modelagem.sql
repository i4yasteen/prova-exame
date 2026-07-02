create database locadora_veiculos;
use locadora_veiculos;

create table marca (
id int auto_increment primary key,
nome varchar (20) not null
);

create table veiculo (
id int auto_increment primary key,
marca_id int not null,
modelo varchar (20) not null,
anoFabricacao char(10) not null,
anoModelo char (10) not null,
renavam varchar (20) not null,
placa char (12) not null,
cor varchar (15) not null,
situacao enum ('liberado', 'manutencão', 'vendido') not null,

constraint fk_marca
foreign key (marca_id)
references marca(id)
on update cascade
on delete restrict
);

insert into marca (nome)
values
('Toyota'),
('Honda'),
('Volkwagen'),
('Fiat');

insert into veiculo (marca_id, modelo, anoFabricacao, anoModelo,
renavam, placa, cor, situacao)
values
(1, 'Corolla', '2022', '2023', '12345678901', 'abc1234', 'preto', 'liberado'),
(2, 'Civic', '2021', '2022', '9876543210', 'def5678', 'branco', 'manutenção'),
(3, 'Gol', '2020', '2021', '11223344556', 'ghi9012', 'vermelho, vendido');


