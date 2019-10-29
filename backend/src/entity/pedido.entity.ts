import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { ClienteEntity } from "./cliente.entity";
import { VendedorEntity } from "./vendedor.entity";
import { PedidoitemEntity } from "./pedidoitem.entity";


@Entity({ name: 'pedido' })
export class PedidoEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({length: 6, nullable: false })
    codigo: string;
    @Column({nullable: false })
    dtpedido: Date;
    @ManyToOne(type => ClienteEntity, { eager: true })
    @JoinColumn({ name: 'cliente_id' })
    cliente: ClienteEntity;
    @ManyToOne(type => VendedorEntity, { eager: true })
    @JoinColumn({ name: 'vendedor_id' })
    vendedor: VendedorEntity;
    @OneToMany(type => PedidoitemEntity, item => item.pedido)
    @JoinColumn({ name: 'PedidoItem_id' })
    itens: PedidoitemEntity[];
}