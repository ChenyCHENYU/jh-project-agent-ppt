package com.jhict.sale.mapper;

import com.jhict.common.data.mybatisplus.mapper.JhBaseMapper;
import com.jhict.common.data.mybatis.entity.JhPage;
import com.jhict.sale.api.dto.CustomerArchivePageDTO;
import com.jhict.sale.api.entity.CustomerArchive;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

/**
 * 客户档案 Mapper
 *
 * <p>由 wl-skills-bd 的 mapper-xml-gen 生成。
 * 继承 {@link JhBaseMapper}（jh4j 对 MyBatis-Plus BaseMapper 的封装）。
 */
@Mapper
public interface CustomerArchiveMapper extends JhBaseMapper<CustomerArchive> {

    String QUERY_PARAM_KEY = "param";

    /**
     * 分页查询（XML 手写 SQL，Oracle 大写下划线）
     */
    JhPage<CustomerArchive> queryPage(JhPage<CustomerArchive> page,
                                      @Param(QUERY_PARAM_KEY) CustomerArchivePageDTO pageDTO);
}
