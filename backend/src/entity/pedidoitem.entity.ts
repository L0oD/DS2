import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { ProdutoEntity } from "./produto.entity";
import { PedidoEntity } from "./pedido.entity";


@Entity({ name: 'pedidoitem' })
export class PedidoitemEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(type => ProdutoEntity, { eager: true })
    @JoinColumn({ name: 'produto_id' })
    produto: ProdutoEntity;
    @ManyToOne(type => PedidoEntity)
    @JoinColumn({ name: 'pedido_id' })
    pedido: PedidoEntity;
    @Column({ type: 'double', nullable: true })
    qtdade: number;
    @Column({ type: 'double', nullable: true })
    vlrunit: number;
}